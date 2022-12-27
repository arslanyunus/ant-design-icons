// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export3LinearSvg from '@ant-design/icons-svg/lib/asn/Export3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export3Linear: Export3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export3LinearSvg}></AntdIcon>;
};

Export3Linear.displayName = 'Export3Linear';
Export3Linear.inheritAttrs = false;
export default Export3Linear;