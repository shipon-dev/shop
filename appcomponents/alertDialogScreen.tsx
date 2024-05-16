import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '~/components/ui/alert-dialog';

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  title?: string;
  subtitle?: string;
  action?: JSX.Element;
};
export const AlertDialogScreen = ({ isOpen, setIsOpen, title, subtitle, action }: Props) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
          {subtitle && <AlertDialogDescription>{subtitle}</AlertDialogDescription>}
        </AlertDialogHeader>
        {action && <AlertDialogFooter>{action}</AlertDialogFooter>}
      </AlertDialogContent>
    </AlertDialog>
  );
};
