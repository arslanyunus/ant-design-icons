// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PaperclipTwoToneSvg from '@ant-design/icons-svg/lib/asn/PaperclipTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PaperclipTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PaperclipTwoTone: PaperclipTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaperclipTwoToneSvg}></AntdIcon>;
};

PaperclipTwoTone.displayName = 'PaperclipTwoTone';
PaperclipTwoTone.inheritAttrs = false;
export default PaperclipTwoTone;