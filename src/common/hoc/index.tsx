import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

type ProtectedRouteType = {
  redirectPath?: string;
  children: JSX.Element;
};

export const ProtectedRoute = ({
  redirectPath = "/login",
  children,
}: ProtectedRouteType): JSX.Element => {
  const isLoggedIn = useAppSelector((state) => state.auth.me);
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

/** Данный код является реализацией защищённого маршрута (Protected Route)
 * с использованием библиотеки `react-router-dom` и хука `useAppSelector`
 * из Redux Toolkit.
 `ProtectedRoute` является компонентом, который принимает два пропса:
 - `redirectPath` (необязательный) - путь куда должен быть перенаправлен
 пользователь
 при отсутствии доступа к данному маршруту;
 - `children` - дочерние элементы, которые будут отображаться, если текущий
 пользователь имеет
 доступ к данному маршруту.
 Первым делом в компоненте используется хук `useAppSelector`,
 чтобы получить состояние авторизации пользователя из хранилища Redux.
 Проверяется, авторизован ли пользователь (`isLoggedIn`).
 Если он не авторизован, то компонент использовал функцию `Navigate`
 из `react-router-dom` для перенаправления пользователя на путь, который был
 указан в`redirectPath`.
 Для гарантированного замены текущей истории браузера используется опция
 замены (`replace`).
 В случае, если пользователь авторизован, дочерние элементы (переданный
 вами JSX-код) будут отображаться.
 Таким образом, данный компонент может быть использован в коде
 приложения для обеспечения безопасного доступа к определённым маршрутам
 в зависимости от авторизации пользователей.
 */
