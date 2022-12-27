// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wind2OutlineSvg from '@ant-design/icons-svg/lib/asn/Wind2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wind2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wind2Outline: Wind2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wind2OutlineSvg}></AntdIcon>;
};

Wind2Outline.displayName = 'Wind2Outline';
Wind2Outline.inheritAttrs = false;
export default Wind2Outline;