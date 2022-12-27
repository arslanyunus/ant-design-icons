// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt1OutlineSvg from '@ant-design/icons-svg/lib/asn/Receipt1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt1Outline: Receipt1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt1OutlineSvg}></AntdIcon>;
};

Receipt1Outline.displayName = 'Receipt1Outline';
Receipt1Outline.inheritAttrs = false;
export default Receipt1Outline;