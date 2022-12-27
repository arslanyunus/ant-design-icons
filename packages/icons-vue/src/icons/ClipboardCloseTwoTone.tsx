// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardCloseTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClipboardCloseTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardCloseTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardCloseTwoTone: ClipboardCloseTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardCloseTwoToneSvg}></AntdIcon>;
};

ClipboardCloseTwoTone.displayName = 'ClipboardCloseTwoTone';
ClipboardCloseTwoTone.inheritAttrs = false;
export default ClipboardCloseTwoTone;