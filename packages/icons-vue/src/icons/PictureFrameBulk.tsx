// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PictureFrameBulkSvg from '@ant-design/icons-svg/lib/asn/PictureFrameBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PictureFrameBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PictureFrameBulk: PictureFrameBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureFrameBulkSvg}></AntdIcon>;
};

PictureFrameBulk.displayName = 'PictureFrameBulk';
PictureFrameBulk.inheritAttrs = false;
export default PictureFrameBulk;