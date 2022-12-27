// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AttachCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/AttachCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AttachCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AttachCircleOutline: AttachCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachCircleOutlineSvg}></AntdIcon>;
};

AttachCircleOutline.displayName = 'AttachCircleOutline';
AttachCircleOutline.inheritAttrs = false;
export default AttachCircleOutline;