// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Document1LinearSvg from '@ant-design/icons-svg/lib/asn/Document1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Document1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Document1Linear: Document1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Document1LinearSvg}></AntdIcon>;
};

Document1Linear.displayName = 'Document1Linear';
Document1Linear.inheritAttrs = false;
export default Document1Linear;