// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart3BoldSvg from '@ant-design/icons-svg/lib/asn/Chart3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart3Bold: Chart3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart3BoldSvg}></AntdIcon>;
};

Chart3Bold.displayName = 'Chart3Bold';
Chart3Bold.inheritAttrs = false;
export default Chart3Bold;