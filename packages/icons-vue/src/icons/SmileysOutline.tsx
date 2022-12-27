// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmileysOutlineSvg from '@ant-design/icons-svg/lib/asn/SmileysOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmileysOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmileysOutline: SmileysOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmileysOutlineSvg}></AntdIcon>;
};

SmileysOutline.displayName = 'SmileysOutline';
SmileysOutline.inheritAttrs = false;
export default SmileysOutline;