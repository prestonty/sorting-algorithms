import java.awt.Color;

public class Block extends Entity {
    private Color colour;
    Block(int x, int y, int width, int height, Color colour) {
        super(x, y, width, height);
        this.colour = colour;
    }
}
