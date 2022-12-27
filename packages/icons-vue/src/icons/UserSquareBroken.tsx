// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/UserSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserSquareBroken: UserSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSquareBrokenSvg}></AntdIcon>;
};

UserSquareBroken.displayName = 'UserSquareBroken';
UserSquareBroken.inheritAttrs = false;
export default UserSquareBroken;