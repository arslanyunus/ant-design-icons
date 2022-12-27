// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserAddBrokenSvg from '@ant-design/icons-svg/lib/asn/UserAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserAddBroken: UserAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserAddBrokenSvg}></AntdIcon>;
};

UserAddBroken.displayName = 'UserAddBroken';
UserAddBroken.inheritAttrs = false;
export default UserAddBroken;