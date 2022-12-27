// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardTextBrokenSvg from '@ant-design/icons-svg/lib/asn/ClipboardTextBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardTextBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardTextBroken: ClipboardTextBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardTextBrokenSvg}></AntdIcon>;
};

ClipboardTextBroken.displayName = 'ClipboardTextBroken';
ClipboardTextBroken.inheritAttrs = false;
export default ClipboardTextBroken;