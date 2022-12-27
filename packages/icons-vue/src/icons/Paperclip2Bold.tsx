// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Paperclip2BoldSvg from '@ant-design/icons-svg/lib/asn/Paperclip2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Paperclip2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Paperclip2Bold: Paperclip2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Paperclip2BoldSvg}></AntdIcon>;
};

Paperclip2Bold.displayName = 'Paperclip2Bold';
Paperclip2Bold.inheritAttrs = false;
export default Paperclip2Bold;