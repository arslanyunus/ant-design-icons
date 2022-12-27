// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardCloseOutlineSvg from '@ant-design/icons-svg/lib/asn/ClipboardCloseOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardCloseOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardCloseOutline: ClipboardCloseOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardCloseOutlineSvg}></AntdIcon>;
};

ClipboardCloseOutline.displayName = 'ClipboardCloseOutline';
ClipboardCloseOutline.inheritAttrs = false;
export default ClipboardCloseOutline;