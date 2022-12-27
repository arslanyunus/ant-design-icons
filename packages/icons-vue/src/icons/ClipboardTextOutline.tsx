// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardTextOutlineSvg from '@ant-design/icons-svg/lib/asn/ClipboardTextOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardTextOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardTextOutline: ClipboardTextOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardTextOutlineSvg}></AntdIcon>;
};

ClipboardTextOutline.displayName = 'ClipboardTextOutline';
ClipboardTextOutline.inheritAttrs = false;
export default ClipboardTextOutline;