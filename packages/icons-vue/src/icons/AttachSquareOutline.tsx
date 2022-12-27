// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AttachSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/AttachSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AttachSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AttachSquareOutline: AttachSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachSquareOutlineSvg}></AntdIcon>;
};

AttachSquareOutline.displayName = 'AttachSquareOutline';
AttachSquareOutline.inheritAttrs = false;
export default AttachSquareOutline;