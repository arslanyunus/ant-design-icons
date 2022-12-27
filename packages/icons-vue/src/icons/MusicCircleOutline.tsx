// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/MusicCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicCircleOutline: MusicCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicCircleOutlineSvg}></AntdIcon>;
};

MusicCircleOutline.displayName = 'MusicCircleOutline';
MusicCircleOutline.inheritAttrs = false;
export default MusicCircleOutline;