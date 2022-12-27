// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClipboardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardTwoTone: ClipboardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardTwoToneSvg}></AntdIcon>;
};

ClipboardTwoTone.displayName = 'ClipboardTwoTone';
ClipboardTwoTone.inheritAttrs = false;
export default ClipboardTwoTone;