// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardTextTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClipboardTextTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardTextTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardTextTwoTone: ClipboardTextTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardTextTwoToneSvg}></AntdIcon>;
};

ClipboardTextTwoTone.displayName = 'ClipboardTextTwoTone';
ClipboardTextTwoTone.inheritAttrs = false;
export default ClipboardTextTwoTone;