// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileTickBulkSvg from '@ant-design/icons-svg/lib/asn/ProfileTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileTickBulk: ProfileTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileTickBulkSvg}></AntdIcon>;
};

ProfileTickBulk.displayName = 'ProfileTickBulk';
ProfileTickBulk.inheritAttrs = false;
export default ProfileTickBulk;