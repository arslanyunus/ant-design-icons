// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PaperclipOutlineSvg from '@ant-design/icons-svg/lib/asn/PaperclipOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PaperclipOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PaperclipOutline: PaperclipOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaperclipOutlineSvg}></AntdIcon>;
};

PaperclipOutline.displayName = 'PaperclipOutline';
PaperclipOutline.inheritAttrs = false;
export default PaperclipOutline;