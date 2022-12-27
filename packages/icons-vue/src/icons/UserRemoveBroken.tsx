// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/UserRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserRemoveBroken: UserRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserRemoveBrokenSvg}></AntdIcon>;
};

UserRemoveBroken.displayName = 'UserRemoveBroken';
UserRemoveBroken.inheritAttrs = false;
export default UserRemoveBroken;