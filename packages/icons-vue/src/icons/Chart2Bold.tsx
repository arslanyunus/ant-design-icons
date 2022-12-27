// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart2BoldSvg from '@ant-design/icons-svg/lib/asn/Chart2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart2Bold: Chart2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart2BoldSvg}></AntdIcon>;
};

Chart2Bold.displayName = 'Chart2Bold';
Chart2Bold.inheritAttrs = false;
export default Chart2Bold;