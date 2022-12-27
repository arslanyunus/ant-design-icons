// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/UserSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserSquareTwoTone: UserSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSquareTwoToneSvg}></AntdIcon>;
};

UserSquareTwoTone.displayName = 'UserSquareTwoTone';
UserSquareTwoTone.inheritAttrs = false;
export default UserSquareTwoTone;