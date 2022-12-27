// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTagLinearSvg from '@ant-design/icons-svg/lib/asn/UserTagLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTagLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTagLinear: UserTagLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTagLinearSvg}></AntdIcon>;
};

UserTagLinear.displayName = 'UserTagLinear';
UserTagLinear.inheritAttrs = false;
export default UserTagLinear;