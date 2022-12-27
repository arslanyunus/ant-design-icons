// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart21BoldSvg from '@ant-design/icons-svg/lib/asn/Chart21Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart21BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart21Bold: Chart21BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart21BoldSvg}></AntdIcon>;
};

Chart21Bold.displayName = 'Chart21Bold';
Chart21Bold.inheritAttrs = false;
export default Chart21Bold;