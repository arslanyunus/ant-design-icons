// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Paperclip2BrokenSvg from '@ant-design/icons-svg/lib/asn/Paperclip2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Paperclip2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Paperclip2Broken: Paperclip2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Paperclip2BrokenSvg}></AntdIcon>;
};

Paperclip2Broken.displayName = 'Paperclip2Broken';
Paperclip2Broken.inheritAttrs = false;
export default Paperclip2Broken;