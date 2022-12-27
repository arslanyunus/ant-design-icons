// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTagTwoToneSvg from '@ant-design/icons-svg/lib/asn/UserTagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTagTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTagTwoTone: UserTagTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTagTwoToneSvg}></AntdIcon>;
};

UserTagTwoTone.displayName = 'UserTagTwoTone';
UserTagTwoTone.inheritAttrs = false;
export default UserTagTwoTone;