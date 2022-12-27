// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileBulkSvg from '@ant-design/icons-svg/lib/asn/ProfileBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileBulk: ProfileBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileBulkSvg}></AntdIcon>;
};

ProfileBulk.displayName = 'ProfileBulk';
ProfileBulk.inheritAttrs = false;
export default ProfileBulk;