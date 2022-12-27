// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export1OutlineSvg from '@ant-design/icons-svg/lib/asn/Export1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export1Outline: Export1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export1OutlineSvg}></AntdIcon>;
};

Export1Outline.displayName = 'Export1Outline';
Export1Outline.inheritAttrs = false;
export default Export1Outline;