from markitdown import MarkItDown
import sys

input_path = "../files/input/"
output_path = "../files/output/"

md = MarkItDown()

def convertToMd(filename):
    """Convert a file to markdown using MarkItDown."""
    try:
        result = md.convert(input_path + filename)
        output_filename = filename.rsplit('.', 1)[0] + ".md"

        with open(output_path + output_filename, "w", encoding="utf-8") as output_file:
            output_file.write(result.text_content)

        print(f"Converted {filename} to {output_filename}")
    except Exception as e:
        print(f"Error converting {filename}: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python markitdown.py fileToConvert")
        sys.exit(1)
    for filename in sys.argv[1:]:
        convertToMd(filename)