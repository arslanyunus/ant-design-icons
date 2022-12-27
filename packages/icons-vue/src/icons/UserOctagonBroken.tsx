// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserOctagonBrokenSvg from '@ant-design/icons-svg/lib/asn/UserOctagonBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserOctagonBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserOctagonBroken: UserOctagonBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserOctagonBrokenSvg}></AntdIcon>;
};

UserOctagonBroken.displayName = 'UserOctagonBroken';
UserOctagonBroken.inheritAttrs = false;
export default UserOctagonBroken;