// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Paperclip2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Paperclip2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Paperclip2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Paperclip2TwoTone: Paperclip2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Paperclip2TwoToneSvg}></AntdIcon>;
};

Paperclip2TwoTone.displayName = 'Paperclip2TwoTone';
Paperclip2TwoTone.inheritAttrs = false;
export default Paperclip2TwoTone;