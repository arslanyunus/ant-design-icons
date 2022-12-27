// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export1LinearSvg from '@ant-design/icons-svg/lib/asn/Export1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export1Linear: Export1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export1LinearSvg}></AntdIcon>;
};

Export1Linear.displayName = 'Export1Linear';
Export1Linear.inheritAttrs = false;
export default Export1Linear;