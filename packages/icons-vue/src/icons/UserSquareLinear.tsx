// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserSquareLinearSvg from '@ant-design/icons-svg/lib/asn/UserSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserSquareLinear: UserSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSquareLinearSvg}></AntdIcon>;
};

UserSquareLinear.displayName = 'UserSquareLinear';
UserSquareLinear.inheritAttrs = false;
export default UserSquareLinear;