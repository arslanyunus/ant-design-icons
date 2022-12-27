// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileDeleteTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileDeleteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileDeleteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileDeleteTwoTone: ProfileDeleteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileDeleteTwoToneSvg}></AntdIcon>;
};

ProfileDeleteTwoTone.displayName = 'ProfileDeleteTwoTone';
ProfileDeleteTwoTone.inheritAttrs = false;
export default ProfileDeleteTwoTone;