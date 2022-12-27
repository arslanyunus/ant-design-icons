// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Paperclip2OutlineSvg from '@ant-design/icons-svg/lib/asn/Paperclip2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Paperclip2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Paperclip2Outline: Paperclip2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Paperclip2OutlineSvg}></AntdIcon>;
};

Paperclip2Outline.displayName = 'Paperclip2Outline';
Paperclip2Outline.inheritAttrs = false;
export default Paperclip2Outline;