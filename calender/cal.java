import java.util.function.Function;

public class cal {
    public static void main(String[] args) {
        int syr = 2017;
        int eyr = 2029;
        int c = lyrcount(syr,eyr);
        System.out.println(c);
    }

    public static int lyrcount(int syr,int eyr) {
        int count = 0;
        for (int i = syr; i <= eyr; i++) {
            if (i%4 == 0) {
                count++;
            }
        }
        return count;
    }

    // public static int lyrcount(int syr,int eyr) {
    //     int count = 0;
    //     while (syr <= eyr) {
    //         if (syr % 4 == 0) {
    //             count++;
    //             syr = syr + 4;
    //         }else if(syr % 4 != 0){

    //         }
    //     }
    //     return count;
    // }
}