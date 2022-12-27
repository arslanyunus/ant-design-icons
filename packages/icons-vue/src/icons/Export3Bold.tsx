// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export3BoldSvg from '@ant-design/icons-svg/lib/asn/Export3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export3Bold: Export3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export3BoldSvg}></AntdIcon>;
};

Export3Bold.displayName = 'Export3Bold';
Export3Bold.inheritAttrs = false;
export default Export3Bold;