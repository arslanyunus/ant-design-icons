// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClipboardTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardTickTwoTone: ClipboardTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardTickTwoToneSvg}></AntdIcon>;
};

ClipboardTickTwoTone.displayName = 'ClipboardTickTwoTone';
ClipboardTickTwoTone.inheritAttrs = false;
export default ClipboardTickTwoTone;