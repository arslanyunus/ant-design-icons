// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Paperclip2LinearSvg from '@ant-design/icons-svg/lib/asn/Paperclip2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Paperclip2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Paperclip2Linear: Paperclip2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Paperclip2LinearSvg}></AntdIcon>;
};

Paperclip2Linear.displayName = 'Paperclip2Linear';
Paperclip2Linear.inheritAttrs = false;
export default Paperclip2Linear;