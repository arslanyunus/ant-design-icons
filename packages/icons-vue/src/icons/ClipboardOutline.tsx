// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardOutlineSvg from '@ant-design/icons-svg/lib/asn/ClipboardOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardOutline: ClipboardOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardOutlineSvg}></AntdIcon>;
};

ClipboardOutline.displayName = 'ClipboardOutline';
ClipboardOutline.inheritAttrs = false;
export default ClipboardOutline;