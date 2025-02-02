import { cn } from "@/lib/utils";

type DottedSeparatorProps = {
    className?: string;
    color?: string;
    height?: string;
    dotSize?: string;
    gapSize?: string;
    direction?: "horizontal" | "vertical";
};

/**
 * Dotted Separator Component
 *
 * @export
 * @param {DottedSeparatorProps} props
 * @returns {JSX.Element}
 */
export const DottedSeparator = ({
    className,
    color = "#d4d4d8",
    height = "2px",
    dotSize = "2px",
    gapSize = "6px",
    direction = "horizontal",
}: DottedSeparatorProps) => {
    const isHorizontal = direction === "horizontal";
    return (
        <div
            className={cn(
                isHorizontal
                    ? "flex w-full items-center"
                    : "flex h-full flex-col items-center",
                className,
            )}
        >
            <div
                className={isHorizontal ? "flex-grow" : "flex-grow-0"}
                style={{
                    width: isHorizontal ? "100%" : height,
                    height: isHorizontal ? height : "100%",
                    backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
                    backgroundSize: isHorizontal
                        ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}`
                        : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
                    backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
                    backgroundPosition: "center",
                }}
            />
        </div>
    );
};

/*
DottedSeparator Component Explanation:

1. **Creates a dotted separator using CSS background properties**  
   - Uses `radial-gradient(circle, color 25%, transparent 25%)` to create dots.

2. **Mathematical Breakdown**  
   - `dotSize` → The diameter of each dot (e.g., `"2px"` means a **2px wide dot**).  
   - `gapSize` → The space **between two dots** (e.g., `"6px"` means **6px of empty space**).  
   - **Total width of one repeat unit** (dot + gap):
     ```
     totalSize = dotSize + gapSize
     ```
     Example:  
     If `dotSize = "2px"` and `gapSize = "6px"`, then:
     ```
     totalSize = 2 + 6 = 8px
     ```
   - In `backgroundSize`:
     - **Horizontal separator:** Repeat unit width = `8px`, height = `height` (e.g., `2px`).
     - **Vertical separator:** Repeat unit height = `8px`, width = `height` (e.g., `2px`).

3. **Background properties for correct rendering**  
   - `backgroundSize`: Controls spacing between dots.  
   - `backgroundRepeat`: `repeat-x` (horizontal) or `repeat-y` (vertical).  
   - `backgroundPosition: center`: Ensures proper alignment.

4. **Flexible layout for horizontal & vertical directions**  
   - Uses `flex-grow` for horizontal separators to fill width.  
   - Uses `flex-col` for vertical separators.

This ensures a clean, reusable, and customizable separator.
*/
