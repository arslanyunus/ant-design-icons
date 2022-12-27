// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/ProfileRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileRemoveOutline: ProfileRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileRemoveOutlineSvg}></AntdIcon>;
};

ProfileRemoveOutline.displayName = 'ProfileRemoveOutline';
ProfileRemoveOutline.inheritAttrs = false;
export default ProfileRemoveOutline;