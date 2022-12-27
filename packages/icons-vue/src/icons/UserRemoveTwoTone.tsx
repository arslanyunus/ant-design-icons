// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/UserRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserRemoveTwoTone: UserRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserRemoveTwoToneSvg}></AntdIcon>;
};

UserRemoveTwoTone.displayName = 'UserRemoveTwoTone';
UserRemoveTwoTone.inheritAttrs = false;
export default UserRemoveTwoTone;