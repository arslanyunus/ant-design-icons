// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export3OutlineSvg from '@ant-design/icons-svg/lib/asn/Export3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export3Outline: Export3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export3OutlineSvg}></AntdIcon>;
};

Export3Outline.displayName = 'Export3Outline';
Export3Outline.inheritAttrs = false;
export default Export3Outline;