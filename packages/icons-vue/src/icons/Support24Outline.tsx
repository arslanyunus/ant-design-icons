// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Support24OutlineSvg from '@ant-design/icons-svg/lib/asn/Support24Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Support24OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Support24Outline: Support24OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Support24OutlineSvg}></AntdIcon>;
};

Support24Outline.displayName = 'Support24Outline';
Support24Outline.inheritAttrs = false;
export default Support24Outline;