// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export2OutlineSvg from '@ant-design/icons-svg/lib/asn/Export2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export2Outline: Export2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export2OutlineSvg}></AntdIcon>;
};

Export2Outline.displayName = 'Export2Outline';
Export2Outline.inheritAttrs = false;
export default Export2Outline;