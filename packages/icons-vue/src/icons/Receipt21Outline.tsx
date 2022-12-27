// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt21OutlineSvg from '@ant-design/icons-svg/lib/asn/Receipt21Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt21OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt21Outline: Receipt21OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt21OutlineSvg}></AntdIcon>;
};

Receipt21Outline.displayName = 'Receipt21Outline';
Receipt21Outline.inheritAttrs = false;
export default Receipt21Outline;